import React from "react";
import { useParams } from "react-router-dom";
import ListingDetail from "../components/ListingDetail/ListingDetail";
import Navbar from "../components/Navbar/Navbar";

const ListingDetailPage = () => {
  // extract the id from the url
  const { id } = useParams();

  return (
    <div className="bg-secondary text-white">
      <Navbar />
      <ListingDetail id={id} />
    </div>
  );
};

export default ListingDetailPage;
