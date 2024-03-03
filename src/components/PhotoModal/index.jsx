import { Modal, Header, Body, Close } from '@zendeskgarden/react-modals';
import useFetch from '../../hooks/useFetch.js';
import placeholder from '../../assets/placeholder.gif';

const PhotoModal = (props)  => {
  const { toggleModal, nasaId } = props;

  const apiUrl = `https://images-api.nasa.gov/asset/${nasaId}`;

  const { data, error, loading } = useFetch(apiUrl);
  const photoSrc = data?.collection.items[0].href ?? placeholder;

  console.log(photoSrc);

  return (
    <Modal onClick={toggleModal}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {photoSrc && (
        <>
          <Header tag="h2">Photo</Header>
          <Body>
            <img src={photoSrc} alt="NASA" width="100%"/>
          </Body>
          <Close aria-label="Close modal" />
        </>
      )}
    </Modal>
  );
};

export default PhotoModal;
