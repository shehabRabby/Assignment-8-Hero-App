export const loadAppList = () => {
  try {
    const data = localStorage.getItem("installList");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  } finally {
  }
};
