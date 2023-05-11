import React, {useState} from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Pricing.module.css';

const Index = () => {
    const [inputValue, setValue] = useState('Name');
    
    return (
        <>
        <Header />
            <label className={styles['select-wrapper']}>
                {inputValue}
                <i class="fas fa-arrow-down"></i>
                <select>
                    <option value="Name">Name</option>
                    <option value="Logo">Logo</option>
                    <option value="Tagline">Tagline</option>
                </select>
            </label>
            <Footer />
        </>
    );
}

export default Index;
