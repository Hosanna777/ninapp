import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { fetchDemoUsers } from '../../../api/auth';
import type { DemoUser } from '../../../types/auth';

type UseAuthOptions = {
  onLoginSuccess: () => void;
};

function useAuth({ onLoginSuccess }: UseAuthOptions) {
  const [demoUsers, setDemoUsers] = useState<DemoUser[]>([]);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [currentUser, setCurrentUser] = useState<DemoUser | null>(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');

  useEffect(() => {
    let isActive = true;

    async function loadDemoUsers() {
      try {
        setIsAuthLoading(true);
        const users = await fetchDemoUsers();
        if (!isActive) return;

        setDemoUsers(users);
        setAuthError('');
      } catch (error) {
        if (!isActive) return;
        setAuthError(error instanceof Error ? error.message : '認証データの取得に失敗しました。');
      } finally {
        if (isActive) {
          setIsAuthLoading(false);
        }
      }
    }

    loadDemoUsers();

    return () => {
      isActive = false;
    };
  }, []);

  return {
    authError,
    currentUser,
    demoUsers,
    isAuthLoading,
    loginEmail,
    loginMessage,
    loginPassword,
    registerEmail,
    registerMessage,
    registerName,
    registerPassword,
    handleLogin: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const matchedUser = demoUsers.find(
        (user) => user.email === loginEmail && user.password === loginPassword,
      );

      if (!matchedUser) {
        setLoginMessage('メールアドレスまたはパスワードが一致しません。');
        return;
      }

      setCurrentUser(matchedUser);
      setLoginMessage('');
      onLoginSuccess();
    },
    handleRegister: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!registerName || !registerEmail || !registerPassword) {
        setRegisterMessage('全ての項目を入力してください。');
        return;
      }

      setRegisterMessage(
        '登録画面のUIは実装済みです。バックエンド未実装のため、現在はGETで取得したテストユーザのみ利用できます。',
      );
    },
    loginWithDemoUser: (user: DemoUser) => {
      setLoginEmail(user.email);
      setLoginPassword(user.password);
      setLoginMessage(`テストユーザ ${user.name} を入力しました。`);
    },
    logout: () => {
      setCurrentUser(null);
      onLoginSuccess();
    },
    setLoginEmail,
    setLoginPassword,
    setRegisterEmail,
    setRegisterName,
    setRegisterPassword,
  };
}

export default useAuth;
