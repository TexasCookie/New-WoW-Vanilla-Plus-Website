import { useState } from 'react';

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
}

export default function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const errs: FormErrors = {};

    if (!username) {
      errs.username = 'Username is required';
    } else if (username.length < 3) {
      errs.username = 'Username must be at least 3 characters';
    } else if (username.length > 16) {
      errs.username = 'Username must be at most 16 characters';
    }

    if (!email) {
      errs.email = 'Email is required';
    } else if (email.length > 30) {
      errs.email = 'Email must be at most 30 characters';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!password) {
      errs.password = 'Password is required';
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    } else if (password.length > 16) {
      errs.password = 'Password must be at most 16 characters';
    }

    if (password !== repeatPassword) {
      errs.repeatPassword = 'Passwords do not match';
    }

    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <div className="text-4xl mb-4">&#10003;</div>
        <h2 className="font-heading text-2xl uppercase text-white mb-2">
          Registration Successful
        </h2>
        <p className="text-wow-muted">
          Welcome aboard, warrior. Your account has been created.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto"
      noValidate
    >
      {/* Username */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength={16}
          className="w-full bg-[#0c0c0c] border border-[rgba(158,151,131,0.1)] text-white px-5 py-4 mb-2 focus:outline-none focus:border-[#f89d41] placeholder-[#5e5b55]"
        />
        {errors.username && (
          <p className="text-[#ff7757] text-sm mt-1">{errors.username}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={30}
          className="w-full bg-[#0c0c0c] border border-[rgba(158,151,131,0.1)] text-white px-5 py-4 mb-2 focus:outline-none focus:border-[#f89d41] placeholder-[#5e5b55]"
        />
        {errors.email && (
          <p className="text-[#ff7757] text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          maxLength={16}
          className="w-full bg-[#0c0c0c] border border-[rgba(158,151,131,0.1)] text-white px-5 py-4 mb-2 focus:outline-none focus:border-[#f89d41] placeholder-[#5e5b55]"
        />
        {errors.password && (
          <p className="text-[#ff7757] text-sm mt-1">{errors.password}</p>
        )}
      </div>

      {/* Repeat Password */}
      <div className="mb-6">
        <input
          type="password"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          className="w-full bg-[#0c0c0c] border border-[rgba(158,151,131,0.1)] text-white px-5 py-4 mb-2 focus:outline-none focus:border-[#f89d41] placeholder-[#5e5b55]"
        />
        {errors.repeatPassword && (
          <p className="text-[#ff7757] text-sm mt-1">{errors.repeatPassword}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-4 uppercase tracking-wider font-heading text-lg bg-[rgba(24,20,18,0.95)] border border-[rgba(158,151,131,0.1)] hover:scale-[1.02] transition-transform"
        style={{
          background: 'linear-gradient(270deg, #F1C22D, #FF7757)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Create Account
      </button>
    </form>
  );
}
