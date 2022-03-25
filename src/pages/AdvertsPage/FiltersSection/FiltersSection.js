import './FiltersSection.scss';
import {useState} from 'react';
import {getFilteredAds} from '../service';
import RangeSlider from '../Common/Slider';
import RadioGroup from '../Common/RadioGroup';
import SelectTags from "../SelectTags";
import {filterSale} from "../service";

function FiltersSection({ initialFilters, defaultFilters, onFilter, prices }) {
    const [filter, setFilter] = useState(initialFilters);
  
    const handleChange = (ev) => {
      let value;
      value = ev.target.value;
  
      setFilter({
        ...filter,
        [ev.target.name]: value,
      });
    };
  
    const handleSubmit = (onSubmit) => (ev) => {
      ev.preventDefault();
      onSubmit(filter);
    };
  
    const handleResetClick = () => {
      setFilter(defaultFilters);
    };
  
    const { name, price, sale, tags } = filter;
    const min = Math.min(...prices);
    const max = Math.max(...prices);

return (
  <form onSubmit={handleSubmit(onFilter)}>
      <input
        className="newAdv-name"
        placeholder="Name"
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
      />
      <label className="range-label">
        Price
        <RangeSlider
          min={min}
          max={max}
          value={price}
          name="price"
          onChange={handleChange}
          marks={{ [min]: min, [max]: max }}
        />
      </label>
      <RadioGroup
        className="radio-group"
        options={Object.values(filterSale)}
        name="sale"
        value={sale}
        onChange={handleChange}
        marks={{ [min]: min, [max]: max }}
      />
      <SelectTags
        className="tags"
        name="tags"
        value={tags}
        onChange={handleChange}
      />
    <button  className= "submit-button" type="submit">🔎 Filter</button>
    <button className= "reset-button" onClick={handleResetClick}>Reset</button>
  </form>
);
}

export default FiltersSection;
