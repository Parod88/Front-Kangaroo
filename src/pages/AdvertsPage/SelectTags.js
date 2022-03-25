import React, { useEffect } from "react";

import CheckboxSelect from "./Common/CheckBoxSelect";
import { useDispatch, useSelector } from "react-redux";
import { loadTags } from "../../store/actions/index";
import { getTags } from "../../store/selectors/selectors";
//import {getTags} from "../../api/services/advertService"
import useQuery from './useQuery';

function SelectTags(props) {
  const dispatch = useDispatch();
  const tags = useSelector(getTags);

  useEffect(() => {
    dispatch(loadTags());
  }, [dispatch]);

// const {tags=[]} = useQuery(getTags)
// console.log("soy data", tags)

  return <CheckboxSelect options={tags} {...props} />;
}

export default SelectTags;
