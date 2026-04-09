import { useState, useMemo, useEffect } from 'react';
import { ALL_MENU_ITEMS } from '../data/menuData';

const ITEMS_PER_PAGE = 10;
const API_BASE_URL = "http://35.171.45.118:8080/api/v1";

export const useMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuItems, setMenuItems] = useState(ALL_MENU_ITEMS);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch menu from API (Phase 2 Integration)
  useEffect(() => {
    const fetchMenu = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/menu`);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setMenuItems(data);
          }
        }
      } catch (error) {
        console.error("Failed to fetch menu, falling back to local data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  const categories = useMemo(() => 
    ["All", ...new Set(menuItems.map(item => item.category))],
    [menuItems]
  );

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(debouncedQuery.toLowerCase()) || 
                            item.desc.toLowerCase().includes(debouncedQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [debouncedQuery, activeCategory, menuItems]);

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
    debouncedQuery,
    isLoading
  };
};
