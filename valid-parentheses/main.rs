use std::collections::HashMap;

struct Solution {}

impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut hash_map = HashMap::new();

        hash_map.insert('(', ')');
        hash_map.insert('[', ']');
        hash_map.insert('{', '}');

        let mut stack: Vec<char> = vec![];

        for char in s.chars() {
            if let Some(_) = hash_map.get(&char) {
                stack.push(char);
                continue;
            }

            if let Some(last_item) = stack.pop() {
                if let Some(closing) = hash_map.get(&last_item) {
                    if *closing != char {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }

        if stack.len() != 0 {
            return false;
        }

        true
    }
}

fn main() {
    let result = Solution::is_valid(String::from("[({})]"));
    println!("{result}");
}
