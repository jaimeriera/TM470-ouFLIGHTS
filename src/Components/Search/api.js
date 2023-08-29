import axios from "axios";

const { CancelToken } = axios;
const search = (input) => {
    if (input) {
        try {
            const source = CancelToken.source();
            const request = axios.get(`/api/search?keyword=${input}`, {
                cancelToken: source.token,
            });
            return {
                async process(callback) {
                    request.then((response) => {
                        const json = response.data;

                        if(json && json.data) {
                            callback(
                                json.data.map(({ address, iataCode, geoCode}) => {
                                    return {
                                        city: address.cityName,
                                        code: address.cityCode,
                                        country: address.countryName,
                                        state: address.stateCode,
                                        iata: iataCode,
                                        geoLat: geoCode.latitude,
                                        geoLng: geoCode.longitude,
                                    };
                                })
                            );
                        }
                    });
                },
                cancel() {
                    source.cancel();
                },
            };
        } catch (error) {
            console.error(error);
        }
    }
    return {
        process() {
            return [];
        },
        cancel() {},
    };
};

export default search;