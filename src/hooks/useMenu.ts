import { useState, useMemo, useEffect } from 'react';
import { ALL_MENU_ITEMS } from '../data/menuData';

const ITEMS_PER_PAGE = 10;

export const useMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  const categories = useMemo(() => 
    ["All", ...new Set(ALL_MENU_ITEMS.map(item => item.category))],
    []
  );

  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(debouncedQuery.toLowerCase()) || 
                            item.desc.toLowerCase().includes(debouncedQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [debouncedQuery, activeCategory]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
    setCurrentPage(1);
  };

  return {
    searchQuery,
    currentPage,
    activeCategory,
    categories,
    paginatedItems,
    totalPages,
    handleSearchChange,
    handleCategoryChange,
    resetFilters,
    setCurrentPage,
    debouncedQuery
  };
};
