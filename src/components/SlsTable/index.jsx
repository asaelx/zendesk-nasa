import { useState } from 'react';
import { Body, Head, HeaderCell, HeaderRow, Table, Caption } from '@zendeskgarden/react-tables';
import { XL } from '@zendeskgarden/react-typography';
import SlsTableRow from './SlsTableRow.jsx';
import PhotoModal from '../PhotoModal';
import useFetch from '../../hooks/useFetch.js';

const SlsTable = () => {

  const [showModal, setShowModal] = useState(false);
  const [nasaId, setNasaId ] = useState("");

  const q = "SLS";
  const mediaType = "image";
  const yearStart = "2022";
  const yearEnd = "2024";
  const pageSize = "20";

  const apiUrl = `https://images-api.nasa.gov/search?q=${q}&media_type=${mediaType}&year_start=${yearStart}&year_end=${yearEnd}&page_size=${pageSize}`;

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
        <div style={{ overflowX: 'auto' }}>
          <Table style={{ minWidth: 500 }}>
            <Caption><XL>NASA Space Launch System</XL></Caption>
            <Head>
              <HeaderRow>
                <HeaderCell>Title</HeaderCell>
                <HeaderCell>Date Created</HeaderCell>
              </HeaderRow>
            </Head>
            <Body>
              {items?.map((item) => (
                <SlsTableRow key={item.data[0]["nasa_id"]} item={item} toggleModal={toggleModal} handleTitleClick={handleTitleClick} />
              ))}
            </Body>
          </Table>
        </div>
      )}
      {showModal && <PhotoModal toggleModal={toggleModal} nasaId={nasaId}/>}
    </>
  );
};

export default SlsTable;

