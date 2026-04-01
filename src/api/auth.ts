import type { DemoUser } from '../types/auth';

export async function fetchDemoUsers() {
  const response = await fetch('/mock/test-users.json', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('テストユーザの取得に失敗しました。');
  }

  return (await response.json()) as DemoUser[];
}
