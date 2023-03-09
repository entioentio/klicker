import { db } from '@/firebase';
import { useCollection } from 'vuefire';
import { collection } from 'firebase/firestore';

const matchCollection = useCollection(collection(db, 'match'));
const groupCollection = useCollection(collection(db, 'group'));

function useFirestoreCollection() {
	return {
		matchCollection,
		groupCollection,
	};
}

export default useFirestoreCollection;
