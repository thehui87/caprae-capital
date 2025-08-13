// Profile Edit Component (Stub)
const Profile: React.FC = () => (
  <div className="container mx-auto p-6 font-inter">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Edit Your Profile 🛠️</h2>
    <div className="bg-white rounded-xl shadow-2xl p-8">
      <p className="text-gray-700 mb-4">
        Here you can update your business details, contact information, and preferences.
      </p>
      <div className="mb-6">
        <label htmlFor="editName" className="block text-gray-700 text-sm font-bold mb-2">
          Name/Company Name:
        </label>
        <input
          type="text"
          id="editName"
          className="shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          defaultValue="Your Business Name"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="editBio" className="block text-gray-700 text-sm font-bold mb-2">
          About Us/Bio:
        </label>
        <textarea
          id="editBio"
          rows={4}
          className="shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="A brief description of your company or investment focus."
        ></textarea>
      </div>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105">
        Save Changes
      </button>
    </div>
  </div>
);

export default Profile;
