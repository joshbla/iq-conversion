// IQConverter.jsx
import { useState, useEffect } from 'react';

function IQConverter() {
  const [values, setValues] = useState({
    termanVal: '', // Stanford-Binet
    cattellVal: '', // Cattell
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Only allow numbers and empty string
    if (value === '' || /^\d+$/.test(value)) {
      setValues(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  useEffect(() => {
    // Convert between the two scales when either value changes
    if (values.termanVal && !values.cattellVal) {
      // Convert from Stanford-Binet to Cattell
      const cattell = Math.round((Number(values.termanVal) * 1.232) - 17.184);
      setValues(prev => ({
        ...prev,
        cattellVal: cattell.toString()
      }));
    } else if (values.cattellVal && !values.termanVal) {
      // Convert from Cattell to Stanford-Binet
      const terman = Math.round((Number(values.cattellVal) + 17.184) / 1.232);
      setValues(prev => ({
        ...prev,
        termanVal: terman.toString()
      }));
    }
  }, [values.termanVal, values.cattellVal]);

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>IQ Conversion</h1>
        <h2 style={{ fontSize: '16px', marginBottom: '20px', color: '#666' }}>
          Enter a value in either field to see the conversion
        </h2>
      </div>
      
      <div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="termanVal" style={{ marginRight: '10px' }}>
            IQ Stanford-Binet:
          </label>
          <input
            type="text"
            id="termanVal"
            name="termanVal"
            value={values.termanVal}
            onChange={handleInputChange}
            style={{ padding: '5px' }}
            maxLength={3}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="cattellVal" style={{ marginRight: '10px' }}>
            IQ Cattell:
          </label>
          <input
            type="text"
            id="cattellVal"
            name="cattellVal"
            value={values.cattellVal}
            onChange={handleInputChange}
            style={{ padding: '5px' }}
            maxLength={3}
          />
        </div>
      </div>
    </div>
  );
}

export default IQConverter;