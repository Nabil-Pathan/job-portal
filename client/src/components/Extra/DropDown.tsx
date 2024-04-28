import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ( { open }: { open: boolean}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e : any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDropdown);

    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`${open ? 'z-[-1]' : 'z-0'} relative inline-block text-left`}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={toggleDropdown}
        >
          <FontAwesomeIcon className='text-xl' icon={faEllipsisVertical} />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <Link
              to='/saved-jobs'
              className="block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Saved Jobs
            </Link>
            <Link
              to='/create-job'
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Create Job
            </Link>

            <Link
              to='/created-jobs'
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              My Jobs
            </Link>

            <Link
              to='/my-applications'
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              My Applications
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
