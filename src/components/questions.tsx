export const commonQuestions = (
  <>
    <div className="mb-6">
      <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">
        Company/Individual Name:
      </label>
      <input
        type="text"
        id="companyName"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="Your Name or Company Name"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="industry" className="block text-gray-700 text-sm font-bold mb-2">
        Primary Industry Focus:
      </label>
      <select
        id="industry"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
      >
        <option value="">Select an industry</option>
        <option value="tech">Technology</option>
        <option value="finance">Finance</option>
        <option value="retail">Retail & E-commerce</option>
        <option value="manufacturing">Manufacturing</option>
        <option value="healthcare">Healthcare</option>
        <option value="service">Professional Services</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="mb-6">
      <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
        Geographic Focus:
      </label>
      <input
        type="text"
        id="location"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., USA, Europe, Remote, Local"
      />
    </div>
  </>
);

export const buyerQuestions = (
  <>
    <h3 className="text-xl font-semibold mb-4 text-purple-700">
      Tell us about your acquisition criteria.
    </h3>
    {commonQuestions}
    <div className="mb-6">
      <label htmlFor="acquisitionBudget" className="block text-gray-700 text-sm font-bold mb-2">
        Acquisition Budget Range:
      </label>
      <select
        id="acquisitionBudget"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
      >
        <option value="">Select budget</option>
        <option value="1M-5M">$1M - $5M</option>
        <option value="5M-20M">$5M - $20M</option>
        <option value="20M-50M">$20M - $50M</option>
        <option value="50M+">$50M+</option>
      </select>
    </div>
    <div className="mb-6">
      <label htmlFor="revenueTarget" className="block text-gray-700 text-sm font-bold mb-2">
        Target Seller Revenue (Annual):
      </label>
      <select
        id="revenueTarget"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
      >
        <option value="">Select revenue target</option>
        <option value="lt1M">Less than $1M</option>
        <option value="1M-5M">$1M - $5M</option>
        <option value="5M-20M">$5M - $20M</option>
        <option value="20M+">$20M+</option>
      </select>
    </div>
    <div className="mb-6">
      <label htmlFor="investmentThesis" className="block text-gray-700 text-sm font-bold mb-2">
        Your Investment Thesis/Strategy:
      </label>
      <textarea
        id="investmentThesis"
        rows={3}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., Seeking profitable SaaS businesses for strategic expansion..."
      ></textarea>
    </div>
  </>
);

export const sellerQuestions = (
  <>
    <h3 className="text-xl font-semibold mb-4 text-green-700">Tell us about your business.</h3>
    {commonQuestions}
    <div className="mb-6">
      <label htmlFor="businessRevenue" className="block text-gray-700 text-sm font-bold mb-2">
        Current Annual Revenue:
      </label>
      <select
        id="businessRevenue"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
      >
        <option value="">Select revenue</option>
        <option value="lt1M">Less than $1M</option>
        <option value="1M-5M">$1M - $5M</option>
        <option value="5M-20M">$5M - $20M</option>
        <option value="20M+">$20M+</option>
      </select>
    </div>
    <div className="mb-6">
      <label htmlFor="employees" className="block text-gray-700 text-sm font-bold mb-2">
        Number of Employees:
      </label>
      <input
        type="number"
        id="employees"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., 10"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="reasonForSale" className="block text-gray-700 text-sm font-bold mb-2">
        Primary Reason for Selling:
      </label>
      <textarea
        id="reasonForSale"
        rows={3}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out"
        placeholder="e.g., Retirement, strategic pivot, new venture..."
      ></textarea>
    </div>
  </>
);
