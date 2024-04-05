import React from "react";
import FeedPhotoItem from "./FeedPhotoItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../Api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhoto.module.css";

const FeedPhoto = ({ page, user, setModalPhoto, setInfinity }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if(response && response.ok && json.length < total) setInfinity(false)
    }
    fetchPhotos();
  }, [request, user, page, setInfinity]);


  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
  
    return (
      <ul className={`animeLeft ${styles.feed}`}>
        {data.map((photo) => (
          <FeedPhotoItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhoto;
