app.use(express.static('public'));

app.use(express.static('files'));

app.use('/static', express.static('public'));

app.use('/static', express.static(__dirname + '/public'));
