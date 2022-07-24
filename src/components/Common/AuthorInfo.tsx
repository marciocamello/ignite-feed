import React from "react";
import { AuthorType } from "../Post";

interface AuthorInfoProps {
    author: AuthorType;
}

export function AuthorInfo({ author }: AuthorInfoProps) {
    return (
        <>
            {author && (
                <>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </>
            )}
        </>
    );
}
