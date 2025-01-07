import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
      </div>
    </div>
  );
};

export default SearchBar;