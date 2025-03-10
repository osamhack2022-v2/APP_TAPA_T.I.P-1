import { userAtom } from '@store/atoms'
import firebase from '@utils/firebase'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

const useAuthListener = () => {
	const setUser = useSetAtom(userAtom)
	useEffect(() => {
		const unsubscribe = firebase.auth.onAuthStateChanged(user => setUser(user))
		return () => unsubscribe()
	}, [])
}

export default useAuthListener
