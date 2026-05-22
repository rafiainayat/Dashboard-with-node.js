import React, { useState } from 'react';
import api from '../config/service';
import { setUser } from '../utils/AuthProf';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('api/v1/auth/user', formData);
      if (response.data && response.data.user) {
        setUser(response.data.user);
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Create your account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring-brand p-2" />
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-brand text-white rounded-md hover:bg-indigo-600 disabled:opacity-60" disabled={loading}>
            {loading ? 'Creating...' : 'Create account'}
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-600">Already have an account? <Link to="/login" className="text-brand font-medium">Log in</Link></p>
      </div>
    </div>
  );
};

export default Signup;
