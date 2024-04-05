import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../Api";
import useFetch from "../../Hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const comfirm = window.confirm("Tem certeza que deseja deletar?");
    if (comfirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      console.log(response);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          delete
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          delete
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
