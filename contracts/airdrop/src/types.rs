use crate::*;

#[derive(Deserialize, Serialize, Default)]
#[serde(crate = "near_sdk::serde")]
#[witgen]
pub struct InitialMetadata {
    /// required, ex. "Mosaics"
    name: String,
    // required, ex. "MOSIAC"
    symbol: String,
    /// Centralized gateway known to have reliable access to decentralized storage assets referenced by `reference` or `media` URLs
    base_uri: String,
    /// Data URL
    icon: Option<String>,
    /// a version like "nft-1.0.0" the current default
    spec: Option<String>,
    /// URL to a JSON file with more info
    reference: Option<String>,
    /// Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
    reference_hash: Option<Base64VecU8>,
}

impl From<InitialMetadata> for NFTContractMetadata {
    fn from(inital_metadata: InitialMetadata) -> Self {
        let InitialMetadata {
            spec,
            name,
            symbol,
            icon,
            base_uri: uri,
            reference,
            reference_hash,
        } = inital_metadata;
        NFTContractMetadata {
            spec: spec.unwrap_or_else(|| NFT_METADATA_SPEC.to_string()),
            name,
            symbol,
            icon,
            base_uri: Some(uri),
            reference,
            reference_hash,
        }
    }
}
