

function searchMovie() {
    $('#movie-list').html('');

    $.ajax({
        url: 'https://www.omdbapi.com',
        type: 'GET',
        dataType: 'json',
        data: {
            'apikey': 'ed9a07de',
            's': $('#search-input').val()
        },
        success: function (result) {
            console.log(result);
            if (result.Response == "True") {
                let film = result.Search;
                console.log(film);

                $.each(film, function (i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-3 mb-3">
                    <div class="card">
                        <img src="`+ data.Poster + `" class="card-img-top imgs" alt="` + data.Title + `">
                        <div class="card-body">
                            <h5 class="card-title">`+ data.Title + `</h5>
                            <p class="card-subtitle text-muted">`+ data.Year + `</p>
                            <button type="button" class="btn btn-primary see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID + `">
                            Launch demo modal
                        </button>
                    
                        </div>
                    </div>
                    </div>
                    `
                    );
                });
            } else {
                $('#movie-list').html(`
                <h1 class="text-center">` + result.Error + `</h1>
                `);
            }
        }

    });
}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    if (e.which === 13) {
        searchMovie();
    }
});
$('#movie-list').on('click', '.see-detail', function () {
    // console.log($(this).data('id'));
    $.ajax({
        url: 'https://www.omdbapi.com',
        type: 'GET',
        dataType: 'json',
        data: {
            'apikey': 'ed9a07de',
            'i': $(this).data('id')
        },
        success: function (movie) {
            if (movie.Response === "True") {
                $('.modal-body').html(`
                <div class="container-fluid">
                  <div class="row">
                      <div class="col-md-4"><img src="` + movie.Poster + `" class="img-fluid"></div>
                      <div class="col-md-8"><ul class="list-group">
                      <li class="list-group-item"><h3>`+ movie.Title + `</h3></li>
                      <li class="list-group-item"> Rilis    : `+ movie.Released + `</li>
                      <li class="list-group-item"> Genre    : `+ movie.Genre + `</li>
                      <li class="list-group-item"> Direktor : `+ movie.Director + `</li>
                      <li class="list-group-item"> Aktor    : `+ movie.Actors + `</li>
                      </ul></div>
                  </div>
              </div>
                `)
            }
        }
    });
});
