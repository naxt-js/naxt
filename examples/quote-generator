// Use the base HTML template

const nx = new window.$naxt();

nx.setState({ quote: "Click below to fetch a quote!" });

async function getQuote() {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();
    nx.setState({ quote: data.quote + " — " + data.author });
}

function App() {
    return nx.div(
        {
            style: {
                fontFamily: "ui-sans-serif, system-ui",
                textAlign: "center",
                padding: "40px",
            },
        },
        nx.h1({}, "✨ Tiny Cool App"),
        nx.p(
            {
                style: {
                    margin: "20px 0",
                    fontSize: "18px",
                    lineHeight: "1.4",
                },
            },
            nx.state.quote
        ),
        nx.button(
            {
                style: {
                    padding: "10px 16px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    cursor: "pointer",
                },
                onClick: getQuote,
            },
            "🎲 New Quote"
        )
    );
}

nx.render(App);
