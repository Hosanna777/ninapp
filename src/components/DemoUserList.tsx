import type { DemoUser } from '../types/auth';

type DemoUserListProps = {
  authError: string;
  demoUsers: DemoUser[];
  isAuthLoading: boolean;
  onUseDemoUser: (user: DemoUser) => void;
};

function DemoUserList({
  authError,
  demoUsers,
  isAuthLoading,
  onUseDemoUser,
}: DemoUserListProps) {
  return (
    <div className="auth-demo-users">
      <h3>テストユーザ</h3>
      {isAuthLoading ? (
        <p>読み込み中...</p>
      ) : authError ? (
        <p>{authError}</p>
      ) : (
        demoUsers.map((user) => (
          <button
            key={user.id}
            className="demo-user-card"
            type="button"
            onClick={() => onUseDemoUser(user)}
          >
            <strong>{user.name}</strong>
            <span>{user.email}</span>
            <em>password: {user.password}</em>
          </button>
        ))
      )}
    </div>
  );
}

export default DemoUserList;
