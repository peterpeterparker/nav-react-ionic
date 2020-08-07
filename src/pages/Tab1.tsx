import React, {useEffect} from 'react';
import {IonContent, IonHeader, IonButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {useHistory} from 'react-router';
import {showTabStore} from '../stores/showtab.store';

const Tab1: React.FC = () => {

  const history = useHistory();

  const {setShowTab} = showTabStore();

  useIonViewDidEnter(() => {
    setShowTab(true);
  });

  // Rather use routerLink for accessibility reason but if needed, like if something has to be done before navigating, use a programmatic routing
  function navigateYolo() {
    history.push(`/yolo/123456`);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton onClick={() => navigateYolo()}>Navigate</IonButton>

        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
