import {createContext, useContext, useMemo} from 'react'
import Polyglot from 'node-polyglot'
import {eng} from '../i18n/en';
import {esp} from '../i18n/es';

// Creamos las traducciones para cada idioma.
// Es recomendable mover esto a otros archivos.

const literals = {
  en: eng,
  es: esp
}



// Definimos los idiomas a los que damos soporte
const locales = {
  en: 'en',
  es: 'es'
}

// Creamos el contexto
const I18nContext = createContext()

/**
 * Componente que encapsula la aplicación dentro del Provider.
 * Este componente será el responsable de actualizar el idioma activado en la aplicación
 */
function I18n({children, locale}) {
  // Cada vez que el locale cambie, obtendremos una instancia de i18n actualizada.
  const i18n = useMemo(
    () =>
      new Polyglot({
        locale,
        phrases: literals[locale]
      }),
    [locale]
  )

  return <I18nContext.Provider value={i18n}>{children}</I18nContext.Provider>
}

// Creamos un Hook para utilizar el contexto en los componentes que necesitemos
const useTranslate = () => useContext(I18nContext)

export {locales, useTranslate}
export default I18n