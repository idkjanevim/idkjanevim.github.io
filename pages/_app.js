import '../styles/style.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
