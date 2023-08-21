interface EmailTemplateProps {
    description: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    description
}) => (
    <div>
        <table style={{ maxWidth: "550px", padding: "10px", margin: "0 auto", borderCollapse: "collapse" }}>
            <tbody>
                <tr>
                    <td style={{ backgroundColor: "#fff", textAlign: "left", padding: 0, height: "5rem" }}>
                        <a href="#">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png" style={{ display: "block", margin: "auto" }} width="45%" />
                        </a>
                    </td>
                </tr>
                <tr>
                    <td style={{ backgroundColor: "#fff" }}>
                        <div style={{ margin: "4% 10% 2%", textAlign: "justify" }}>

                            <h2 style={{ color: "#202020", fontFamily: "Expletus Sans, cursive", margin: "0 0 7px", letterSpacing: "1.2px" }}>¡ Hola !</h2>

                            <p style={{ fontFamily: "Nunito,sans-serif", fontSize: "15px", margin: "2px" }}>
                                {description}
                            </p>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td style={{ backgroundColor: "#fff" }}>
                        <p style={{ color: "#b3b3b3", fontSize: "14px", textAlign: "center", margin: "30px 0 5px 0", letterSpacing: "1px", fontWeight: "bold" }}>© HKC</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);
