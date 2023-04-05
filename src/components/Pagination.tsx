interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center">
      <ul className="flex">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              className={`mx-1 p-2.5 font-medium text-sm rounded-lg border ${
                pageNumber === currentPage
                  ? "text-white bg-purple-700 border-purple-700 hover:bg-purple-800 focus:ring-1 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                  : "text-gray-900 bg-white border-gray-300 hover:bg-gray-100 focus:ring-1 focus:outline-none focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:focus:ring-purple-500"
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
