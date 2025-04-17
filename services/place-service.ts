type post = {
    isBody: string,
    isTitle: string,
}

export const postRequest = async ({isBody, isTitle}: post ): Promise<any> => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
              title: isTitle,
              body: isBody,
            }),
            headers: {
              "content-type": "application/json",
            },
          });
        
          const newPost = await response.json();
          return newPost;
    } catch (error) {
        throw new Error(`error message ${error}`)
    }
 
};

export const fetchAllPlaces = async (): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_PLACE_ENDPOINT}/posts`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`error ${error}`);
  }
};
