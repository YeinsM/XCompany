import { useState, useEffect } from "react";
import { getAll, post, put } from "../helpers/store";

const AddressService = (address, setAddress) => {
  useEffect(() => {
    getAll(setAddress, "addresses");
  }, [setAddress]);
};

export { AddressService };