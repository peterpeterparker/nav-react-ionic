import React, {useEffect} from 'react';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';

import {showTabStore} from '../stores/showtab.store';
import {useParams} from 'react-router';

import styles from './Yolo.module.scss';

interface MyInterface {
  orderId: string;
}

const Yolo: React.FC = ( ) => {

  // Get route params
  const params: MyInterface = useParams();

  const {setShowTab} = showTabStore();

  useEffect(() => {
    setShowTab(false);
  }, []);

  useEffect(() => {
    console.log(params ? params.orderId : null);
  },[params]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Yolo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1 className={styles.red}>Yolo</h1>


        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
        <h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1><h1>Yolo</h1>
      </IonContent>
    </IonPage>
  );
};

export default Yolo;
