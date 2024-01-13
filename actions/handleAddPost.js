

const handlePost = data => {
  const image = data.image[0];
  const formData = new FormData();
  formData.append('image', image);

  const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

  fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then(res => {
      return res.json();
    })
    .then(imgData => {
      if (imgData.success) {
        const post = {
          title: data.title,
          content: content,
          image: imgData.data.url,
          author: {
            username: user.username,
            email: user.primaryEmailAddress.emailAddress,
          },
        };

        fetch('/api/blogs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(post),
        })
          .then(res => res.json())
          .then(result => {
            if (result.status === 200) {
              reset();
              setContent('');
              toast.success('Post added successfully');
            }
          });
      }
    });
};

export default handlePost;
