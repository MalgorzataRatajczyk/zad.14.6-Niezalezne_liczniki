var Decounter = React.createClass({

    getDefaultProps() {
        console.log('Metoda, która ustawia domyślne wartości propsów (które nie zostały przekazane do komponentu')
    },

    getInitialState: function() {
        return {
            decounter: 0
        };
    },

    decrement: function() {
        this.setState({
            decounter: this.state.decounter - 1
        });
    },
    
    componentWillMount() {
        console.log('Metoda wykonywana jest kiedy stworzony zostanie element i wstawiony do drzewa DOM')
    },
    
    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.decounter),
            React.createElement('button', {className: 'button', onClick: this.decrement}, 'Odejmij'),
        );
    },
    
    componentDidMount() {
        console.log('Metoda ta jest wywołana od razu po wywołaniu metody render')
    },

    componentWillReceiveProps(nextProps) {
        console.log('Metoda ta zostanie wywołana tylko wtedy, gdy komponent otrzyma nowe właściwości \
        i nie jest to faza pierwszego renderowania (montowanie komponentu). \
        Metoda ta pozwala aktualizować stan na podstawie nadchodzących właściwości. ')
    },

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.decounter != nextState.decounter;
        console.log('Metoda ta jest wywoływana tuż przed wywołaniem metody render \
        i pozwala sprawdzić, czy faktycznie trzeba jeszcze raz przerysować komponent')
    },

    componentWillUpdate(nextProps, nextState) {
        console.log('Metoda componentWillUpdate zostanie wywołana natychmiast jeśli metoda shouldComponentUpdate zwróci wartość true.\
         Metoda powinna zostać wywoływana tylko do przygotowania na nadchodzące zmiany. ')
    },

    componentDidUpdate(prevProps, prevState) {
        console.log('Metoda ta wywołuje się jako ostatnia zaraz po przerysowaniu komponentu\
         — w niej możemy wykonać np. jakieś manipulacje DOM')

    },

    componentWillUnmount() {
        console.log('Metoda ta wywyływana jest po usunięciu komponentu z drzewa DOM')
    }

});

