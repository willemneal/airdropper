use data_url::DataUrl;
use near_sdk::env;

use crate::TimestampMs;

pub fn current_time_ms() -> TimestampMs {
    env::block_timestamp() / 1_000_000
}

pub fn data_url_to_string(accounts: &str) -> String {
    let url = DataUrl::process(accounts).unwrap();
    url.decode_to_vec()
        .map(|(bytes, _)| String::from_utf8(bytes).expect("invalid utf8"))
        .unwrap()
}

pub fn string_to_line_iter(accounts: &str) -> impl Iterator<Item = String> + '_ {
    accounts.split_whitespace().map(str::to_lowercase)
}
