import React, { useEffect, useState } from 'react'
import { getUser } from '../utils/AuthProf'
import api from '../config/service'

const Dashboard = () => {
  const [profile, setProfile] = useState(getUser() || null)

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await api.get('api/v1/auth/user-profile')
        if (res.data && res.data.user) setProfile(res.data.user)
      } catch (err) {
        console.error(err)
      }
    }
    if (!profile) fetchProfile()
  }, [])

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800">Welcome back, {profile?.name || 'User'}</h2>
          <p className="text-sm text-slate-600">Here's a summary of your account</p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-sm text-slate-500">Profile</h3>
          <div className="mt-2 text-lg font-medium">{profile?.email}</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-sm text-slate-500">Role</h3>
          <div className="mt-2 text-lg font-medium">{profile?.role || 'User'}</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-sm text-slate-500">Account</h3>
          <div className="mt-2 text-lg font-medium">Member since: TBD</div>
        </div>
      </section>

      <section className="p-4 bg-white rounded shadow">
        <h3 className="text-lg font-medium">Quick actions</h3>
        <div className="mt-2 text-sm text-slate-600">Use the sidebar to navigate through your dashboard features.</div>
      </section>
    </div>
  )
}

export default Dashboard
