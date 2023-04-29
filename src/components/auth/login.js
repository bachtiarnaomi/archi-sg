import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../helpers/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Login() {
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('user', result.user);
    } catch (error) {
      console.log('err', error);
    }
  };

  const GoogleLogout = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('user', result.user);
    } catch (error) {
      console.log('err', error);
    }
  };
  return (
    <div className="login">
      {!user && (
        <button
          onClick={() => {
            console.log('google click');
            GoogleLogin();
          }}
        >
          <FcGoogle style={{ fontSize: '20px' }} /> Sign in with Google
        </button>
      )}
      {user && (
        <button
          onClick={() => {
            console.log('signing out');
            auth.signOut();
          }}
        >
          <FcGoogle style={{ fontSize: '20px' }} /> Sign out
        </button>
      )}
    </div>
  );
}

export default Login;
