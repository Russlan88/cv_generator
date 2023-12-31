import React, { useState } from 'react';
import InformationIco from '../assets/Icons/Information';
import './style.css';

interface ImageUploadProps {
  onFileChange?: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = props => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        if (props.onFileChange) props.onFileChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-container">
      <div style={styles.container}>
        {image ? (
          <img src={image} alt="Preview" style={styles.previewImage} />
        ) : (
          <label style={styles.label}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={styles.hiddenInput}
            />
          </label>
        )}
      </div>

      <div className="svg-container">
        <InformationIco />
        <p className="svg-text">
          L'immagine sarà inserita di default nel CV, ma potrai modificarla in
          seguito.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '1px solid #e2e2e2',
    backgroundColor: 'white',
    position: 'relative',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  hiddenInput: {
    display: 'none',
  },
  previewImage: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};

export default ImageUpload;
