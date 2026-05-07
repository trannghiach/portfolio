"use client";

import { FormEvent, useEffect, useState } from "react";
import { HiCheck, HiLockClosed } from "react-icons/hi";

export type ProjectChallenge = {
  projectId: string;
  title: string;
  category: string;
  difficulty: string;
  points: number;
  prompt: string;
  reward: {
    badge: string;
    notes: string;
  };
};

type FlagState = "idle" | "checking" | "wrong" | "solved" | "error";

export function ProjectFlagSubmit({
  challenge,
}: {
  challenge: ProjectChallenge;
}) {
  const [flag, setFlag] = useState("");
  const [state, setState] = useState<FlagState>("idle");

  const storageKey = `ctf-solved:${challenge.projectId}`;

  useEffect(() => {
    if (localStorage.getItem(storageKey) === "true") {
      setState("solved");
    }
  }, [storageKey]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!flag.trim() || state === "checking") {
      return;
    }

    setState("checking");

    try {
      const res = await fetch("/api/flags/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId: challenge.projectId,
          flag,
        }),
      });

      const data = await res.json();

      if (data.ok) {
        localStorage.setItem(storageKey, "true");
        setState("solved");
        setFlag("");
      } else {
        setState("wrong");
      }
    } catch {
      setState("error");
    }
  }

  const solved = state === "solved";

  return (
    <div className={`project-flag-panel ${solved ? "solved" : ""}`}>
      <div className="flag-panel-header">
        <div>
          <span className="flag-kicker">mini ctf challenge</span>
          <h4>{challenge.title}</h4>
        </div>

        <div className="flag-meta">
          <span>{challenge.category}</span>
          <span>{challenge.difficulty}</span>
          <strong>{challenge.points} pts</strong>
        </div>
      </div>

      <p className="flag-prompt">{challenge.prompt}</p>

      {!solved ? (
        <form className="flag-form" onSubmit={handleSubmit}>
          <div className="flag-input-wrap">
            <HiLockClosed />
            <input
              value={flag}
              onChange={(event) => setFlag(event.target.value)}
              placeholder="foqs{...}"
              autoComplete="off"
              spellCheck={false}
            />
          </div>

          <button type="submit" disabled={state === "checking"}>
            {state === "checking" ? "Checking..." : "Submit Flag"}
          </button>
        </form>
      ) : (
        <div className="flag-solved">
          <HiCheck />
          <span>Flag accepted</span>
        </div>
      )}

      {state === "wrong" && (
        <p className="flag-message wrong">Nope. Wrong flag.</p>
      )}

      {state === "error" && (
        <p className="flag-message wrong">Something broke. Try again.</p>
      )}

      {solved && (
        <div className="flag-reward">
          <span>reward unlocked</span>
          <strong>{challenge.reward.badge}</strong>
          <p>{challenge.reward.notes}</p>
        </div>
      )}
    </div>
  );
}