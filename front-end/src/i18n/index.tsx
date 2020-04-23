import React, { FC } from 'react'
import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next, I18nextProvider } from 'react-i18next'

i18n
	// learn more: https://github.com/i18next/i18next-xhr-backend
	.use(Backend)
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		// special options for react-i18next
		// learn more: https://react.i18next.com/components/i18next-instance
		react: {
			useSuspense: false,
			wait: true,
		},
		lng: 'en',
		fallbackLng: 'en',
		whitelist: ['en', 'sk'],
		lowerCaseLng: true,
		debug: false,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		saveMissing: true,
		saveMissingTo: 'all',
		backend: {
			loadPath: './locales/{{lng}}/translations.json',
		},
	})

const Translater: FC = (props: { children?: React.ReactNode }): JSX.Element => {
	return <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
}

export default Translater
