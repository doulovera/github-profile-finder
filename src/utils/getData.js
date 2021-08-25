const getData = async (username) => {
  const URL = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error:", error);
  }
};

export default getData;
