const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/countries`;

const authHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem('token')}`,
});

const getByRegion = async (region) => {
  const res = await fetch(`${BASE_URL}/external/region/${encodeURIComponent(region)}`, {
    headers: authHeaders(),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch flags data');
  }

  return await res.json();
};

const getByCode = async (code) => {
  const res = await fetch(`${BASE_URL}/external/alpha/${encodeURIComponent(code)}`, {
    headers: authHeaders(),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch country detail');
  }

  return await res.json();
};

export { getByRegion, getByCode };