import { useState } from 'react';
import { Body, Head, HeaderCell, HeaderRow, Table, Caption } from '@zendeskgarden/react-tables';
import { XL } from '@zendeskgarden/react-typography';
import CuriosityTableRow from './CuriosityTableRow.jsx';
import PhotoModal from '../PhotoModal';
import useFetch from '../../hooks/useFetch.js';

const CuriosityTable = () => {

  const [showModal, setShowModal] = useState(false);
  const [nasaId, setNasaId ] = useState("");

  const q = "taken by the curiosity rover sol";
  const mediaType = "image";
  const pageSize = "10";

  const apiUrl = `https://images-api.nasa.gov/search?q=${q}&media_type=${mediaType}&page_size=${pageSize}`;

  const { data, error, loading } = useFetch(apiUrl);
  const items = data?.collection.items;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleTitleClick = (nasaId) => {
    setNasaId(nasaId);
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {items && (
        <div style={{ overflowX: 'auto', marginTop: '50px' }}>
          <Table style={{ minWidth: 500 }}>
            <Caption><XL>Photos taken by the Curiosity rover</XL></Caption>
            <Head>
              <HeaderRow>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>Secondary Creator</HeaderCell>
                <HeaderCell>Image Link</HeaderCell>
              </HeaderRow>
            </Head>
            <Body>
              {items?.map((item) => (
                <CuriosityTableRow key={item.data[0]["nasa_id"]} item={item} toggleModal={toggleModal} handleTitleClick={handleTitleClick} />
              ))}
            </Body>
          </Table>
        </div>
      )}
      {showModal && <PhotoModal toggleModal={toggleModal} nasaId={nasaId}/>}
    </>
  );
};

export default CuriosityTable;

