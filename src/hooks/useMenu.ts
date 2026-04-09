import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MenuItem } from '../types/menu';
import { ALL_MENU_ITEMS } from '../data/menuData';

const API_BASE_URL = 'http://35.171.45.118:8080/api/v1';

const fetchMenu = async (): Promise<MenuItem[]> => {
  const { data } = await axios.get(`${API_BASE_URL}/menu`);
  return data;
};

export const useMenu = () => {
  const {
    data: menuItems,
    isLoading,
    error,
    isError
  } = useQuery<MenuItem[]>({
    queryKey: ['menu'],
    queryFn: fetchMenu,
    initialData: ALL_MENU_ITEMS, // Use static data as initial state
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  return {
    menuItems,
    isLoading,
    error: isError ? error : null,
  };
};
