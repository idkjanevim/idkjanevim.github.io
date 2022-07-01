import '../styles/style.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
