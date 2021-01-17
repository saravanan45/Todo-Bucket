export const createNewBucket = async (data) => {
  try {
    const response = await fetch("http://localhost:4000/createBucket", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getBucketsList = async (category) => {
  try {
    const response = await fetch(
      `http://localhost:4000/bucketsList/${category}`
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getTodosInfo = async (bucketName) => {
  try {
    const response = await fetch(
      `http://localhost:4000/getTodos/${bucketName}`
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createNewTodo = async (data) => {
  try {
    const response = await fetch("http://localhost:4000/createTodo", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const EditTodo = async (data) => {
  try {
    const response = await fetch("http://localhost:4000/editTodo", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await fetch(`http://localhost:4000/deleteTodo/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const updateStatus = async (data) => {
  try {
    const response = await fetch("http://localhost:4000/changeStatus", {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
