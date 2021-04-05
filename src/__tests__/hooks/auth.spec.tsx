import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../hooks/auth';

describe('Auth hock', () => {
  it('should be able to sign in', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'johndoe@exemple.com.br',
      password: '123456',
    });

    expect(result.current.user.email).toEqual('johndoe@exemple.com.br');
  });
});
