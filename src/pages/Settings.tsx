// Settings Component (Stub)
const Settings: React.FC = () => (
  <div className="container mx-auto p-6 font-inter">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Settings ⚙️</h2>
    <div className="bg-white rounded-xl shadow-2xl p-8">
      <p className="text-gray-700 mb-4">
        Manage your account settings, notifications, and privacy preferences.
      </p>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Notification Preferences</h3>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" defaultChecked />
          <span className="ml-2 text-gray-700">Email notifications for new matches</span>
        </label>
      </div>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
        Save Settings
      </button>
    </div>
  </div>
);

export default Settings;
